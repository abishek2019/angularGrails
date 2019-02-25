package myprojectangular

import grails.converters.JSON

class UserController {
    def userService
    def register() {
        def jsonObject=request.JSON
       if(jsonObject.id){
           def user=User.get(jsonObject.id as long)          //User.get(jsonObject)
           user.firstName=jsonObject.firstName
           user.lastName = jsonObject.lastName
           user.save(flush: true)
           render user as JSON
       }
       else {
           def user = new User();
           user.firstName = jsonObject.firstName
           user.lastName = jsonObject.lastName
           user.save(flush: true)
           render user as JSON
       }
//        render user as JSON

    }
    def userList() {
        def readData=[:]
        readData.keyValue=userService.read()
        render readData as JSON

    }
    def delete(){
        def jsonObject=request.JSON
        userService.delete(jsonObject.id as long)
        render "hi"
    }


}
