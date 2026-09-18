def get_data():
    with open("name.txt", "r") as file:
        data = file.read()
        data = data.split()
        return data

get_data()


