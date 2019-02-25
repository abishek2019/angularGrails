package myprojectangular

import grails.transaction.Transactional

@Transactional
class UserService {

    def read() {

        def userList=User.findAll()
        return userList

    }
    def delete(long id){
        def user=User.get(id)
        user.delete(flush: true)

    }
}
