package com.aula5;

public class UsuarioJogo {
    private  String name;
    private String nickName;
    private int score;
    private int level;

    public UsuarioJogo(String name, String nickName) {
        this.name = name;
        this.nickName = nickName;
        this.score = 0;
        this.level = 1;
    }

    public  void increaseScore(){
        this.score++;
        System.out.println(this.name + " tem score de " + this.score );
    }

    public  void increaseLevel(){
        this.level++;
        System.out.println(this.name + " tem level de " + this.level );
    }

    public String getName() {
        return name;
    }

    public String getNickName() {
        return nickName;
    }

    public int getScore() {
        return score;
    }

    public int getLevel() {
        return level;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }
}
