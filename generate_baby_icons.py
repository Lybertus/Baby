import math, zlib, struct

def render_pixel(u, v):
    # u, v in [0, 100]
    R = 22.5
    is_corner = False
    cx, cy = 0.0, 0.0
    if u < R and v < R:
        cx, cy = R, R
        is_corner = True
    elif u > 100 - R and v < R:
        cx, cy = 100 - R, R
        is_corner = True
    elif u < R and v > 100 - R:
        cx, cy = R, 100 - R
        is_corner = True
    elif u > 100 - R and v > 100 - R:
        cx, cy = 100 - R, 100 - R
        is_corner = True

    alpha = 1.0
    if is_corner:
        d = math.sqrt((u - cx)**2 + (v - cy)**2)
        if d > R + 0.5:
            return (0, 0, 0, 0)
        elif d > R - 0.5:
            alpha = (R + 0.5 - d)

    # 1. Background gradient
    t = (u * 0.35 + v * 0.65) / 100.0
    r = int(2 + t * 5)
    g = int(132 - t * 43)
    b = int(199 - t * 66)

    # 2. Ambient top reflection
    d_hl = math.sqrt((u - 50)**2 + (v - 26)**2)
    if d_hl < 46:
        hl = (46 - d_hl) / 46.0 * 0.10
        r = int(r + (255 - r) * hl)
        g = int(g + (255 - g) * hl)
        b = int(b + (255 - b) * hl)

    # 3. Precision Halo Ring (cx=50, cy=50, r=36)
    d_center = math.sqrt((u - 50)**2 + (v - 50)**2)
    halo_dist = abs(d_center - 36)
    if halo_dist < 0.9:
        h_alpha = (0.9 - halo_dist) * 0.22
        r = int(r * (1 - h_alpha) + 255 * h_alpha)
        g = int(g * (1 - h_alpha) + 255 * h_alpha)
        b = int(b * (1 - h_alpha) + 255 * h_alpha)

    # 4. Swaddle Body
    # Defined for v between 46 and 83
    in_swaddle = False
    swaddle_alpha = 0.0
    if 46 <= v <= 83.5:
        # width varies with v
        # at v=46: half-width ~ 14 (36 to 64)
        # at v=60: half-width ~ 23 (27 to 73)
        # at v=83: half-width ~ 0
        frac = (v - 46) / 37.0
        # Smooth egg profile: 23 * sin(frac * pi * 0.85)
        hw = 23.5 * math.sin(frac * 2.8 + 0.35)
        dist_x = abs(u - 50)
        edge = hw - dist_x
        if edge > 0.5:
            in_swaddle = True
            swaddle_alpha = 1.0
        elif edge > -0.5:
            in_swaddle = True
            swaddle_alpha = edge + 0.5

    if in_swaddle:
        # Swaddle gradient: white to ice blue
        st = (v - 46) / 37.0
        sr = int(255 - st * 31)   # 255 -> 224
        sg = int(255 - st * 13)   # 255 -> 242
        sb = int(255 - st * 1)    # 255 -> 254

        # Swaddle folds
        # Fold 1: from (33, 56) to (67, 61), center dip at (50, 65)
        # y_curve = 56 + (u - 33)*(61-56)/34 + 5 * sin((u-33)/34 * pi)
        if 33 <= u <= 67:
            f1_y = 56.0 + (u - 33.0) * 5.0 / 34.0 + 6.0 * math.sin((u - 33.0) / 34.0 * math.pi)
            if abs(v - f1_y) < 1.0:
                f_a = (1.0 - abs(v - f1_y)) * 0.35
                sr = int(sr * (1 - f_a) + 2 * f_a)
                sg = int(sg * (1 - f_a) + 132 * f_a)
                sb = int(sb * (1 - f_a) + 199 * f_a)

            # Fold 2: from (67, 58) to (33, 63)
            f2_y = 58.0 + (67.0 - u) * 5.0 / 34.0 + 5.0 * math.sin((67.0 - u) / 34.0 * math.pi)
            if abs(v - f2_y) < 0.9:
                f_a = (0.9 - abs(v - f2_y)) * 0.25
                sr = int(sr * (1 - f_a) + 2 * f_a)
                sg = int(sg * (1 - f_a) + 132 * f_a)
                sb = int(sb * (1 - f_a) + 199 * f_a)

        r = int(r * (1 - swaddle_alpha) + sr * swaddle_alpha)
        g = int(g * (1 - swaddle_alpha) + sg * swaddle_alpha)
        b = int(b * (1 - swaddle_alpha) + sb * swaddle_alpha)

    # 5. Baby Head: Circle at (50, 40.5), r = 15.5
    d_head = math.sqrt((u - 50)**2 + (v - 40.5)**2)
    if d_head < 16.0:
        head_alpha = 1.0 if d_head < 15.0 else (16.0 - d_head)
        r = int(r * (1 - head_alpha) + 255 * head_alpha)
        g = int(g * (1 - head_alpha) + 255 * head_alpha)
        b = int(b * (1 - head_alpha) + 255 * head_alpha)

    # 6. Newborn Beanie Cap (Top Dome)
    # Inside head circle or top dome for v <= 39
    if v <= 39.2 and (u - 50)**2 / (15.5)**2 + (v - 39.0)**2 / (16.0)**2 <= 1.05:
        # Beanie dome gradient: #38bdf8 to #0284c7
        bt = (v - 23.0) / 16.0
        bt = max(0.0, min(1.0, bt))
        br = int(56 + bt * (2 - 56))
        bg = int(189 + bt * (132 - 189))
        bb = int(248 + bt * (199 - 248))
        r, g, b = br, bg, bb

    # 7. Beanie Folded Cuff: box u in [33.5, 66.5], v in [36.8, 41.3]
    if 33.5 <= u <= 66.5 and 36.8 <= v <= 41.3:
        # Rounded edges
        cuff_ok = True
        if u < 35.5:
            if math.sqrt((u - 35.5)**2 + (v - 39.0)**2) > 2.2: cuff_ok = False
        elif u > 64.5:
            if math.sqrt((u - 64.5)**2 + (v - 39.0)**2) > 2.2: cuff_ok = False
        if cuff_ok:
            r, g, b = 186, 230, 253  # #bae6fd

    # 8. Beanie Top Knot: circle at (50, 22.5), r = 3.2
    d_knot = math.sqrt((u - 50)**2 + (v - 22.5)**2)
    if d_knot < 3.2:
        k_a = 1.0 if d_knot < 2.5 else (3.2 - d_knot) / 0.7
        r = int(r * (1 - k_a) + 186 * k_a)
        g = int(g * (1 - k_a) + 230 * k_a)
        b = int(b * (1 - k_a) + 253 * k_a)

    # 9. Rosy Cheeks (soft glowing blush at (40, 46.5) and (60, 46.5))
    for cx_c in [40.0, 60.0]:
        d_chk = math.sqrt((u - cx_c)**2 + (v - 46.5)**2)
        if d_chk < 3.2:
            chk_a = (3.2 - d_chk) / 3.2 * 0.40
            r = int(r * (1 - chk_a) + 244 * chk_a)
            g = int(g * (1 - chk_a) + 63 * chk_a)
            b = int(b * (1 - chk_a) + 94 * chk_a)

    # 10. Sleeping Eyes (Gentle peaceful arcs)
    # Left eye: u in [42, 48], dipping to 44.8
    # Right eye: u in [52, 58], dipping to 44.8
    eye_hit = False
    for eye_cx in [45.0, 55.0]:
        if abs(u - eye_cx) <= 3.0:
            arc_v = 43.0 + (1.0 - ((u - eye_cx) / 3.0)**2) * 1.8
            if abs(v - arc_v) < 1.0:
                e_a = (1.0 - abs(v - arc_v)) * 0.95
                r = int(r * (1 - e_a) + 3 * e_a)
                g = int(g * (1 - e_a) + 105 * e_a)
                b = int(b * (1 - e_a) + 161 * e_a)

    # 11. Sweet Smile: u in [48, 52], dipping to 49.5
    if abs(u - 50.0) <= 2.0:
        smile_v = 48.5 + (1.0 - ((u - 50.0) / 2.0)**2) * 1.2
        if abs(v - smile_v) < 0.8:
            s_a = (0.8 - abs(v - smile_v)) * 0.85
            r = int(r * (1 - s_a) + 2 * s_a)
            g = int(g * (1 - s_a) + 132 * s_a)
            b = int(b * (1 - s_a) + 199 * s_a)

    # 12. Bezel Highlight stroke (inset 1px)
    if is_corner:
        d = math.sqrt((u - cx)**2 + (v - cy)**2)
        if abs(d - (R - 1.0)) < 0.8:
            b_a = (0.8 - abs(d - (R - 1.0))) * 0.25
            r = int(r * (1 - b_a) + 255 * b_a)
            g = int(g * (1 - b_a) + 255 * b_a)
            b = int(b * (1 - b_a) + 255 * b_a)
    else:
        if abs(u - 1.0) < 0.8 or abs(u - 99.0) < 0.8 or abs(v - 1.0) < 0.8 or abs(v - 99.0) < 0.8:
            b_a = 0.22
            r = int(r * (1 - b_a) + 255 * b_a)
            g = int(g * (1 - b_a) + 255 * b_a)
            b = int(b * (1 - b_a) + 255 * b_a)

    final_a = int(max(0.0, min(1.0, alpha)) * 255)
    return (r, g, b, final_a)

def write_png(filename, size):
    sub = 2  # 2x2 supersampling
    raw_rows = []
    inv_size = 100.0 / size
    sub_step = inv_size / sub
    sub_weight = 1.0 / (sub * sub)

    for y in range(size):
        row = bytearray()
        row.append(0) # filter type 0
        for x in range(size):
            r_tot, g_tot, b_tot, a_tot = 0.0, 0.0, 0.0, 0.0
            for sy in range(sub):
                v = (y + (sy + 0.5) / sub) * inv_size
                for sx in range(sub):
                    u = (x + (sx + 0.5) / sub) * inv_size
                    pr, pg, pb, pa = render_pixel(u, v)
                    r_tot += pr
                    g_tot += pg
                    b_tot += pb
                    a_tot += pa
            row.append(int(r_tot * sub_weight))
            row.append(int(g_tot * sub_weight))
            row.append(int(b_tot * sub_weight))
            row.append(int(a_tot * sub_weight))
        raw_rows.append(bytes(row))

    compressed = zlib.compress(b"".join(raw_rows), 9)

    png = bytearray(b"\x89PNG\r\n\x1a\n")
    # IHDR
    ihdr_data = struct.pack(">IIBBBBB", size, size, 8, 6, 0, 0, 0)
    ihdr_crc = zlib.crc32(b"IHDR" + ihdr_data)
    png += struct.pack(">I", 13) + b"IHDR" + ihdr_data + struct.pack(">I", ihdr_crc)

    # IDAT
    idat_crc = zlib.crc32(b"IDAT" + compressed)
    png += struct.pack(">I", len(compressed)) + b"IDAT" + compressed + struct.pack(">I", idat_crc)

    # IEND
    iend_crc = zlib.crc32(b"IEND")
    png += struct.pack(">I", 0) + b"IEND" + struct.pack(">I", iend_crc)

    with open(filename, "wb") as f:
        f.write(png)
    print(f"Rendered {filename} ({size}x{size})")

if __name__ == "__main__":
    write_png("apple-touch-icon.png", 180)
    write_png("icon-192.png", 192)
    write_png("favicon-32x32.png", 32)
    write_png("icon-512.png", 512)
    print("All Apple Baby PNG icons generated successfully!")
