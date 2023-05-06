from exercise_3 import validate_email


def filter_valid_emails(emails):
    valid_emails = []

    for email in emails:
        try:
            validate_email(email)
            valid_emails.append(email)
        except Exception as e:
            print(f"Email '{email}' não adicionado - {e}\n")

    return valid_emails


if __name__ == "__main__":
    filter_valid_emails(
        ["valid@mail.com", "1nvalid@mail.com", "valid@domain.com"]
    )
