import axios from 'axios';
import { useEffect, useState } from 'react';
import { addChamp, decrementChamp } from '../features/champSlice';
import { useSelector, useDispatch } from 'react-redux';
import Draggable from 'react-draggable';

const styleSquare = {
	border: '1px solid black',
	alignItems: 'center',
	justifyContent: 'center',
	margin: '5px',
};

const Home = () => {
	const [listChamp, setListChamp] = useState([]);
	useEffect(() => {
		axios
			.get('https://632bc1af1aabd837398b4c43.mockapi.io/champ')
			.then((response) => {
				const { data } = response;
				setListChamp([...data]);
			});
	}, []);

	const listChampSelected = useSelector(
		(state) => state.champion.lstChampSelect
	);
	const dispatch = useDispatch();

	const getOpacity = (champ) => {
		const arrOrigin = listChampSelected.map((champSelect) => {
			return champSelect.origin;
		});
		const check = arrOrigin.some((y) => y === champ.origin);
		if (arrOrigin.length === 0 || check) {
			return '1';
		} else {
			return '0.3';
		}
	};

	return (
		<div
			style={{
				display: 'flex',
				flexWrap: 'wrap',
				marginTop: '10px',
				justifyContent: 'flex-start',
			}}
		>
			{listChamp
				// .filter((champ) => {
				// 	const arrOrigin = listChampSelected.map((champSelect) => {
				// 		return champSelect.origin;
				// 	});
				// 	const check = arrOrigin.some((y) => y === champ.origin);
				// 	return arrOrigin.length > 0 ? check : true;
				// })
				.map((champ) => {
					return (
						// <Draggable onStop={() => dispatch(addChamp(champ))}>
						<div
							style={{
								cursor: 'pointer',
								alignItems: 'center',
								width: '6%',
								padding: '10px 15px',
								opacity: getOpacity(champ),
							}}
							key={champ.id}
							onClick={() => dispatch(addChamp(champ))}
						>
							<div>
								<img
									src={champ.avatar}
									alt=""
									style={{ width: '55px', userSelect: 'none' }}
								/>
							</div>
							<p>{champ.name}</p>
						</div>
						// </Draggable>
					);
				})}

			<div
				style={{
					display: 'flex',
					width: '100%',
					justifyContent: 'center',
					paddingTop: '15px',
					borderTop: '1px solid black',
				}}
			>
				{listChampSelected.map((champ) => {
					return (
						<div
							style={styleSquare}
							key={champ.id}
							onClick={() => dispatch(decrementChamp(champ))}
						>
							<img
								src={champ.avatar}
								alt=""
								style={{ width: '55px', userSelect: 'none' }}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Home;
