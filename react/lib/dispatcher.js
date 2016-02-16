function Dispatcher() {
	this._lastID = 0;
	this._callbacks = {};
}

Dispatcher.prototype.register = function (callback) {
	var id = 'CID_' + this._lastID++;
	this._callbacks[id] = callback;
	return id;
};

Dispatcher.prototype.dispatch = function (actions) {
	for (var id in this._callbacks) {
		if (this._callbacks.hasOwnProperty(id)) {
			this._callbacks[id](actions);
		}
	}
};

Dispatcher.prototype.waitFor = function (ids) {
	//TODO
};