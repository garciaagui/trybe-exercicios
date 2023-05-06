def get_max_time_without_instabilities(collected_values):
    max_time = 0
    current_time = 0

    for value in collected_values:
        if value == 1:
            current_time += 1

            if current_time > max_time:
                max_time = current_time

        else:
            current_time = 0

    return max_time
