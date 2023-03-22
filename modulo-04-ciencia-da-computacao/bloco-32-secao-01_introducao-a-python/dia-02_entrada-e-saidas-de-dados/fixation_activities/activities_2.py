# Atividade 03
def get_unapproved_students():
    unapproved_list = []

    with open("students.txt") as file:
        for line in file:
            student_info = line.split()
            if int(student_info[1]) < 6:
                unapproved_list.append(student_info[0] + "\n")

    return unapproved_list


def generate_unapproved_students_arch():
    unapproved_list = get_unapproved_students()

    with open("unapproved_students.txt", mode="w") as file:
        file.writelines(unapproved_list)
        print(unapproved_list)


# generate_unapproved_students_arch()
