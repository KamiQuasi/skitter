export class CPXRepository {
    _id:string;
    _name:string;
    _displayName:string;
    _description:string;
    _ref:string;
    _uri:string;
    _lastRefreshed: Date;

    get id() {
        return this._id;
    }
    set id(val) {
        this._id = val;
    }

    get name() {
        return this._name;
    }
    set name(val) {
        this._name = val;
    }

    get uri() {
        return new URL(this._uri);
    }
    set uri(val) {
        if (typeof val === 'object') {
            this._uri = val.toString();
        } else {
            this._uri = val;
        }
    }
}