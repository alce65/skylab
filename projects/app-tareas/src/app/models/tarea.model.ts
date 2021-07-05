export interface iTarea {
    _id: string;
    titulo: string;
    responsable: string;
    isCompleted: boolean;
    fechaInicio?: Date | null;
	request?: any
}

export class Tarea implements iTarea {
    constructor(
        public _id: string = '',
        public titulo: string = '',
        public responsable: string = '',
        public isCompleted: boolean = false,
        public fechaInicio: Date | null = null,
    ) {}
}


