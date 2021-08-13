class User {

    constructor(id, name, email, password, profilePhotoPath, bookList){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.profilePhotoPath = profilePhotoPath;
        this.bookList = [];
        
        if(bookList != undefined){
            this.bookList.push(...bookList);
        }
      

    }

}

module.exports = User;