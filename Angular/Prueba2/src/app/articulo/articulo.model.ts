export class Articulo {
    private _id: number;
    private _nombre: string;
    private _precio: number;
    private _descripcion?: string;
    private _imagen?: string;

    constructor(id: number, nombre: string, precio: number, descripcion?: string, imagen?: string) {
        this._id = id;
        this._nombre = nombre;
        this._precio = precio;
        this._descripcion = descripcion;
        this._imagen = imagen;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(value: string) {
        this._nombre = value;
    }

    get precio(): number {
        return this._precio;
    }

    set precio(value: number) {
        this._precio = value;
    }

    get descripcion(): string | undefined {
        return this._descripcion;
    }

    set descripcion(value: string | undefined) {
        this._descripcion = value;
    }

    get imagen(): string | undefined {
        return this._imagen;
    }

    set imagen(value: string | undefined) {
        this._imagen = value;
    }
}
