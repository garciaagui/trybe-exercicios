from examples.hashmap import Employee, HashMap


employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]
registry = HashMap()

for id, name in employees:
    new_employee = Employee(id, name)
    registry.insert(new_employee)


print(registry.get_value(23))

print(f"Before update: {registry.get_value(10)}")
registry.update_value(10, "name30")
print(f"After update: {registry.get_value(10)}")
