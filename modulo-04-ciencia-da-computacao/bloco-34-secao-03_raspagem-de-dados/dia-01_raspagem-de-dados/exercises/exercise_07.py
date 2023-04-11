from pymongo import MongoClient


with MongoClient() as client:
    db = client.library

    published_books = list(db.books.find({"status": "PUBLISH"}))
    unique_categories = set()

    for book in published_books:
        if len(book["categories"]):
            unique_categories.update(book["categories"])

    for category in unique_categories:
        books_count = db.books.count_documents(
            {"status": "PUBLISH", "categories": category}
        )
        print(f"{category}: {books_count}")
