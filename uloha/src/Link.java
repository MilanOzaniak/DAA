public class Link {
    private String name;
    private String description;
    private Link before;
    private Link after;

    public Link getBefore() {
        return before;
    }

    public void setBefore(Link before) {
        this.before = before;
    }

    public Link getAfter() {
        return after;
    }

    public void setAfter(Link after) {
        this.after = after;
    }


    public Link(String name, String description){
        this.name = name;
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void write(){
        System.out.println(name + "  " + description + "\n");
    }
}
