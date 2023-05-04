def get_same_row_connections(servers):
    counter = 0
    stop = len(servers)

    for index, server in enumerate(servers):
        for i in range(index + 1, stop):
            if server == servers[i] == 1:
                counter += 1

    return counter


def get_connected_servers(servers):
    counter = 0
    stop = len(servers)

    for row in range(stop):
        counter += get_same_row_connections(servers[row])

        for column in range(stop):
            for index in range(stop):
                if index == row:
                    continue

                if servers[index][column] == servers[row][column] == 1:
                    counter += 1

    return counter
