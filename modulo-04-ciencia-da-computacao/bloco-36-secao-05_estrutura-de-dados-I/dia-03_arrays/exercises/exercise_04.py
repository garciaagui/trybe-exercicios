def get_attendance_by_hour(entries, departures, hour):
    attendance = 0
    stop = len(entries)  # or len(departures)

    for index in range(0, stop):
        entry = entries[index]
        departure = departures[index]

        if entry <= hour <= departure:
            attendance += 1

    return attendance
