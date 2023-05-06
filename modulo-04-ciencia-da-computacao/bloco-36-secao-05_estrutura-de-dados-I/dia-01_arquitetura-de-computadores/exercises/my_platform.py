import platform


def get_my_platform_info():
    p = platform.system()
    v = platform.release()
    a = platform.architecture()[0]

    print(f"Platform: {p}\n" f"Version: {v}\n" f"Architecture: {a}")
