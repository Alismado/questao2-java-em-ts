interface EquipamentoInterface {
    ligar(): void;
    desligar(): void;
    informarStatus(): string;
}

abstract class Equipamento implements EquipamentoInterface {
    private nome: string;
    protected status: boolean;

    constructor(nome: string) {
        this.nome = nome;
        this.status = false; 
    }

    ligar(): void {
        if (!this.status) {
            this.status = true;
            console.log(`${this.nome} foi ligado`);
        } else {
            console.log(`${this.nome} já está ligado`);
        }
    }

    desligar(): void {
        if (this.status) {
            this.status = false;
            console.log(`${this.nome} foi desligado`);
        } else {
            console.log(`${this.nome} já está desligado`);
        }
    }

    informarStatus(): string {
        return `${this.nome} está ${this.status ? 'ligado' : 'desligado'}`;
    }

    getNome(): string {
        return this.nome;
    }

    setNome(nome: string): void {
        this.nome = nome;
    }
}

class Televisao extends Equipamento {
    private tamanhoTela: number;

    constructor(nome: string, tamanhoTela: number) {
        super(nome);
        this.tamanhoTela = tamanhoTela;
    }

    getTamanhoTela(): number {
        return this.tamanhoTela;
    }
}

class Computador extends Equipamento {
    private memoriaRAM: number;

    constructor(nome: string, memoriaRAM: number) {
        super(nome);
        this.memoriaRAM = memoriaRAM;
    }

    getMemoriaRAM(): number {
        return this.memoriaRAM;
    }
}

class Principal {
    static main(): void {
        const tv = new Televisao("TV Samsung", 55);
        const pc = new Computador("PC Dell", 16);

        console.log("\nTestando Televisão:");
        console.log(tv.informarStatus());
        tv.ligar();
        console.log(tv.informarStatus());
        tv.ligar(); 
        tv.desligar();
        console.log(tv.informarStatus());

        console.log("\nTestando Computador:");
        console.log(pc.informarStatus());
        pc.ligar();
        console.log(pc.informarStatus());
        pc.desligar();
        console.log(pc.informarStatus());
    }
}

Principal.main();