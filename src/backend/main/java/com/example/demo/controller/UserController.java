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

    @ExceptionHandler
    @GetMapping("/login")
    public ModelAndView head(@RequestParam(name="email") String Email, @RequestParam(name="password") String Password) {
        try {
            User user = service.get(Email, Password);
            ModelAndView mav = new ModelAndView("redirect:http://localhost:3000/login");
            mav.addObject("user", user);
            mav.addObject("success", true);
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
            mav.addObject("user", user);
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
