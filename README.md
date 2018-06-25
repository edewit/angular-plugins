This project consists of 3 modules:

* plugins-core: Plugin Decorator and Manager
    external plugins need to reside in the “modules” folder of the application
* plugins-example: 2 example plugins
* plugins: Main app that uses plugins from plugins-example (see app.component.ts)

Plugins register new routes and can have depedencies and gets loaded by `systemjs`

A plugin can be a declared by adding a decorator like so:

```java
    @Extension('my-button', [])
    @Component({
        selector: 'my-button,
        templateUrl: 'my-button.html'
    })
    export class MyButtonComponent {
    ...
    }
```

Running this:

```bash
./run.sh
#open browser http://localhost:4200/
```