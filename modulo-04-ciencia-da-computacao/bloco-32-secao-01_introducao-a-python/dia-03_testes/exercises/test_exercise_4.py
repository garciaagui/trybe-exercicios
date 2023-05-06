from exercise_4 import filter_valid_emails


def test_only_valid_emails_are_filtered():
    input = ["valid@mail.com", "1nvalid@mail.com", "valid@domain.com"]
    output = ["valid@mail.com", "valid@domain.com"]

    assert filter_valid_emails(input) == output


def test_invalid_emails_group_results_an_empty_list():
    input = ["1nvalid@mail.com", "invalid@mail."]
    output = []

    assert filter_valid_emails(input) == output


def test_invalid_username_email_should_print_error_message(capsys):
    input = ["valid@mail.com", "1nvalid@mail.com", "valid@domain.com"]

    assert filter_valid_emails(input)

    captured = capsys.readouterr()

    assert (
        "Email '1nvalid@mail.com' não adicionado - Formato inválido!"
        in captured.out
    )


def test_invalid_website_email_should_print_error_message(capsys):
    input = ["valid@mail.com", "invalid@123.com", "valid@domain.com"]

    assert filter_valid_emails(input)

    captured = capsys.readouterr()

    assert (
        "Email 'invalid@123.com' não adicionado - Formato inválido!"
        in captured.out
    )


def test_invalid_extension_email_should_print_error_message(capsys):
    input = ["valid@mail.com", "invalid@mail.", "valid@domain.com"]

    assert filter_valid_emails(input)

    captured = capsys.readouterr()

    assert (
        "Email 'invalid@mail.' não adicionado - Formato inválido!"
        in captured.out
    )
