package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;;

import javax.naming.AuthenticationException;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserService service;

    @GetMapping("/users")
    public List<User> hello(){
        return service.getAll();
    }

    @GetMapping(value = "/user")
    public @ResponseBody User Get(@RequestParam(name = "id")long id){
        return service.get(id);
    }

    @ExceptionHandler
    @PostMapping("/login")
    public ModelAndView head(@RequestParam(name="email") String Email, @RequestParam(name="password") String Password) {
        try {
            User user = service.get(Email, Password);
            ModelAndView mav = new ModelAndView("redirect:http://localhost:3000/login");
            mav.addObject("user_id", user.getUser_id());
            return mav;
        }
        catch (AuthenticationException e){
            ModelAndView mav = new ModelAndView("redirect:http://localhost:3000/login");
            mav.addObject("success", false);
            mav.addObject("message", e.getMessage());
            return mav;
        }
    }

    @PostMapping("/signup")
    public ModelAndView regist(HttpServletRequest request){
        String Name = request.getParameter("name");
        String Surname = request.getParameter("surname");
        String Email = request.getParameter("email");
        String Login = request.getParameter("login");
        String Password = request.getParameter("password");

        try {
            User user = service.Add(Name, Surname, Email, Login, Password);

            ModelAndView mav = new ModelAndView("redirect:http://localhost:3000/login");
            mav.addObject("success", true);
            // тут в теории должно быть mav.addObject("user", user); но я так и неразобралась как работать с jsp
            /*mav.addObject("user_name", user.getName());
            mav.addObject("user_surname", user.getSurname());
            mav.addObject("user_login", user.getLogin());
            mav.addObject("user_email", user.getEmail());
            mav.addObject("user_id", user.getUser_id());*/
            return mav;
        }
        catch (AuthenticationException e){
            ModelAndView mav = new ModelAndView("redirect:http://localhost:3000/signup");
            mav.addObject("success", false);
            mav.addObject("message", e.getMessage());
            return mav;
        }
    }
}
