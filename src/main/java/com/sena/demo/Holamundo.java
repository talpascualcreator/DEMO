package com.sena.demo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Holamundo {
    @RequestMapping("/")

    public String hola() {
        return "Codificación de módulos del software Stand-alone, web y móvil de acuerdo al proyecto a desarrollar GA7-220501096-AA3-EV01";
    }
}
