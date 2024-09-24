import { error } from '@sveltejs/kit';
import {api} from '$lib/database/films';

export function load({ params }) {
	const film = api.getFilmById(+params.id)
	if(!film) throw error(404)

	return {
		film
	}
}