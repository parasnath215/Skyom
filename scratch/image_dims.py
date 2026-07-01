import os
import struct

def get_image_info(filepath):
    """Determine the image type and dimensions."""
    size = os.path.getsize(filepath)
    with open(filepath, 'rb') as f:
        data = f.read(30)
        
    if data.startswith(b'\x89PNG\r\n\x1a\n'):
        # PNG
        w, h = struct.unpack('>LL', data[16:24])
        return 'PNG', int(w), int(h)
    elif data.startswith(b'\xff\xd8'):
        # JPEG
        with open(filepath, 'rb') as f:
            f.seek(0)
            f.read(2)
            b = f.read(1)
            try:
                while (b and b != b'\xda'):
                    while (b != b'\xff'): b = f.read(1)
                    while (b == b'\xff'): b = f.read(1)
                    if (b >= b'\xc0' and b <= b'\xc3'):
                        f.read(3)
                        h, w = struct.unpack('>HH', f.read(4))
                        return 'JPEG', int(w), int(h)
                    else:
                        chunk_len = struct.unpack('>H', f.read(2))[0]
                        f.read(chunk_len - 2)
                    b = f.read(1)
            except Exception as e:
                return 'JPEG', 0, 0
    return 'Unknown', 0, 0

folder = r'e:\Websites\Skyom\assets\Skyom Floor'
if os.path.exists(folder):
    print("Files in Skyom Floor:")
    for filename in sorted(os.listdir(folder)):
        filepath = os.path.join(folder, filename)
        if os.path.isfile(filepath):
            t, w, h = get_image_info(filepath)
            print(f"{filename}: {t} {w}x{h}")
else:
    print("Folder does not exist")
