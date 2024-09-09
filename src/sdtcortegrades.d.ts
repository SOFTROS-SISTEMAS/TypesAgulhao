
export interface GxsdtCorteGradesCorteGrades {
    CorteGradeId: number; // Corte Grade Id
    CorteGradeProdutoId: number; // Corte Grade Produto Id
    CorteGradeNumero: number; // Corte Grade Numero
    CorteGradeCorCod: number; // Corte Grade Cor Cod
    CorteGradeCorNome: string; // Corte Grade Cor Nome
    CorteGradeCorHexa: string;
    CorteEnfestoQtde: number;
    CorteGradeEnfestoA: number; // Enfesto A
    CorteGradeEnfestoB: number; // Enfesto B
    CorteGradeEnfestoC: number; // Enfesto C
    CorteGradeRetalho: number; // Retalho
    CorteGradeZiperCod: number; // Ziper
    CorteGradeZiperDescricao: number;
    CorteGradeEtqCod: number; // Etiqueta
    CorteGradeEtqDescricao: string;
}
        
export interface GxsdtCorteGrades {
    CorteId: number;
    CorteGrades: GxsdtCorteGradesCorteGrades[];
}
        