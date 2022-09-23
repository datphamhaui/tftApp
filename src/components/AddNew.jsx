import axios from 'axios';
import React, { useState } from 'react';

const AddNew = () => {
	const [dataOrigin, setDataOrigin] = useState({});
	const [dataClass, setDataClass] = useState({});
	const [dataChamp, setDataChamp] = useState({});

	const addOrigin = () => {
		axios.post(
			'https://632bc1af1aabd837398b4c43.mockapi.io/origin',
			dataOrigin
		);
	};

	const addClass = () => {
		axios.post('https://632bc1af1aabd837398b4c43.mockapi.io/class', dataClass);
	};

	const addChamp = () => {
		axios.post('https://632bc1af1aabd837398b4c43.mockapi.io/champ', dataChamp);
	};

	return (
		<div className="row p-3">
			<div className="col-4">
				<form>
					<h2>Origin</h2>
					<div className="form-group mb-2">
						<label>ID</label>
						<input
							type="string"
							className="form-control"
							value={dataOrigin.id}
							onChange={(e) =>
								setDataOrigin({ ...dataOrigin, id: e.target.value })
							}
						/>
					</div>
					<div className="form-group mb-2">
						<label>Origin Name</label>
						<input
							type="string"
							className="form-control"
							value={dataOrigin.originName}
							onChange={(e) =>
								setDataOrigin({ ...dataOrigin, originName: e.target.value })
							}
						/>
					</div>

					<button type="button" className="btn btn-primary" onClick={addOrigin}>
						Submit Origin
					</button>
				</form>
			</div>

			<div className="col-4">
				<form>
					<h2>Class</h2>
					<div className="form-group mb-2">
						<label>ID</label>
						<input
							type="string"
							className="form-control"
							onChange={(e) =>
								setDataClass({ ...dataClass, id: e.target.value })
							}
						/>
					</div>
					<div className="form-group mb-2">
						<label>Class Name</label>
						<input
							type="string"
							className="form-control"
							onChange={(e) =>
								setDataClass({ ...dataClass, className: e.target.value })
							}
						/>
					</div>

					<button type="button" className="btn btn-primary" onClick={addClass}>
						Submit Class
					</button>
				</form>
			</div>

			<div className="col-4">
				<form>
					<h2>Champ</h2>

					<div className="form-group  mb-2">
						<label>Name</label>
						<input
							type="string"
							className="form-control"
							onChange={(e) =>
								setDataChamp({ ...dataChamp, name: e.target.value })
							}
						/>
					</div>
					<div className="form-group  mb-2">
						<label>Avatar</label>
						<input
							type="string"
							className="form-control"
							onChange={(e) =>
								setDataChamp({ ...dataChamp, avatar: e.target.value })
							}
						/>
					</div>
					<div className="form-group  mb-2">
						<label>Origin</label>
						<input
							type="string"
							className="form-control"
							onChange={(e) =>
								setDataChamp({ ...dataChamp, origin: e.target.value })
							}
						/>
					</div>
					<div className="form-group  mb-2">
						<label>Class1</label>
						<input
							type="string"
							className="form-control"
							onChange={(e) =>
								setDataChamp({
									...dataChamp,
									class: [e.target.value],
								})
							}
						/>
					</div>
					<div className="form-group  mb-2">
						<label>Class2</label>
						<input
							type="string"
							className="form-control"
							onChange={(e) =>
								setDataChamp({
									...dataChamp,
									class: [...dataChamp.class, e.target.value],
								})
							}
						/>
					</div>

					<button type="button" className="btn btn-primary" onClick={addChamp}>
						Submit Champ
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddNew;
