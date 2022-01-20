import java.util.ArrayList;
import java.util.Scanner;

public class Browser {
    Scanner sc = new Scanner(System.in);
    ArrayList<Link> links = new ArrayList<Link>();
    ArrayList<Link> history = new ArrayList<Link>();
    String input;
    String input2;

    public Browser(){
        generate("https://www.facebook.com", "Facebook");
        generate("https://www.instagram.com", "Instagram");
        generate("https://www.youtube.com", "Youtube");
        writeLinks();

        while (true) {
            String input = sc.nextLine();
            if (input.equals("create")){
                createLink();
            }
            else if (input.equals("delete")){
                deleteLink();
            }
            else if (input.equals("open")){
                openLink();
            }
            else if (input.equals("history")){
                writeHistory();
            }
            else if (input.equals("pop")){
                historyPop();
            }
            else {
                System.out.println("och error");
            }
        }
    }

    public void generate(String name, String description){
        links.add(new Link(name, description));
    }

    // Uzivatel si vytvori link
    public void createLink(){
        System.out.println("zadajte adresu linku:");
        input = sc.nextLine();
        System.out.println("zadajte nazov linku:");
        input2 = sc.nextLine();
        generate(input, input2);
        writeLinks();
    }

    // Vypisu sa linky
    public void writeLinks(){
        for(Link link : links){
            System.out.print(links.indexOf(link) + 1);
            System.out.print(" " + link.getName() + "\n");
            System.out.println("----------------------------");
        }

    }

    // Uzivatel vymazava linky
    public void deleteLink(){
        System.out.println("Vyberte ktory link chcete vymazat");
        writeLinks();
        input = sc.nextLine();
        links.remove(Integer.parseInt(input) - 1);
        writeLinks();

    }

    // Uzivatel otvara linky
    public void openLink(){
        System.out.println("vyberte si link ktory chcete otvorit");
        input = sc.nextLine();
        Link link = links.get(Integer.parseInt(input) - 1);
        link.write();
        writeLinks();
        historyPush(link);
    }

    // pushuje do historie linky ktore otvorime
    public void historyPush(Link link) {
        if (history.size() > 0) {
            Link lastLink = history.get(history.size() - 1);
            lastLink.setAfter(link);
            link.setBefore(lastLink);
        }

        history.add(link);
    }

    // vymaze posledny link z historie
    public void historyPop() {
        history.remove(history.size() - 1);

        if (history.size() > 0) {
            Link lastLink = history.get(history.size() - 1);
            lastLink.setAfter(null);
        }
    }

    // vypise historiu
    public void writeHistory() {
        if (history.isEmpty()){
            System.out.println("Prazdna historia");
        }
        for (Link link:history) {
            link.write();
        }
    }

}
