import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from './index';

export const getTasks = (callback) => {
	const ref = collection(db, 'tasks');
	const q = query(ref);

	onSnapshot(q, (snapshot) => {
		const data = snapshot.docs.map((doc) => {
			const body = {
				id: doc.id,
				...doc.data(),
			};

			return body;
		});

		callback(data);
	});
};
