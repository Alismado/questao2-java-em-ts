interface Pagamento {
    calcularPagamento(): number;
}

class ServicoConsultoria implements Pagamento {
    private descricao: string;
    private valorFixo: number;

    constructor(descricao: string, valorFixo: number) {
        this.descricao = descricao;
        this.valorFixo = valorFixo;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public setDescricao(descricao: string): void {
        this.descricao = descricao;
    }

    public calcularPagamento(): number {
        return this.valorFixo;
    }
}