import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        System.out.println("escriba el nombre");
        String nombre =teclado.nextLine();
        System.out.println("escriba el pueblo");
        String lugar =teclado.nextLine();

        String presentacion = "el señor " + nombre + " de pueblo de " + lugar ;

        System.out.println(presentacion);
    }
}
