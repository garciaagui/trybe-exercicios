def shuffle_cards(cards):
    shuffled_cards = []
    middle_index = len(cards) // 2

    for offset in range(middle_index):
        shuffled_cards.extend(cards[offset::middle_index])

    return shuffled_cards
