from pymongo import MongoClient


def find_books_by_category(category):
    with MongoClient() as client:
        db = client.library

        books_by_category = list(db.books.find({"categories": category}))

        if not len(books_by_category):
            return print("No books found")

        for book in books_by_category:
            print(book["title"])


find_books_by_category("Java")
