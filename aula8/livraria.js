class livraria {
    constructor(nome, autor, genero, preço) {
        this.nome= nome;
        this.autor= autor
        this.genero= genero;
        this.preço= preço;
        this.estoque=true
    }
    


 esgotado() {this.estoque= false}
 mostruario() 
 {return "Nome: " + this.nome +  "\nAutor: " + this.autor + "\nGênero: " + this.genero + "\nPreço: R$" + this.preço + "\nEm Estoque: " + (this.estoque ? "Não" : "Sim");
}  }
    const livro1 = new livraria ("Filhos do Éden: Herdeiros de Atlântida", "Eduardo Spohr", "Literatura fantástica",  48.40   )
    const livro2 = new livraria (" H.P. Lovecraft - Medo Clássico - Vol. 1 - Miskatonic Edition", "H.P. LOVECRAFT", "Terror, fantasia, ficção científica", 59.92)

    livro1.esgotado()

    console.log(livro1.mostruario());
    console.log(livro2.mostruario());
