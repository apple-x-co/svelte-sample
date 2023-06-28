import { writable } from 'svelte/store';

export const step = writable(1);

export const answer = writable({
    nickname: null,
    question1: null,
});
