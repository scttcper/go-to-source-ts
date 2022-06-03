import rxjs from 'rxjs';
import del from 'del';
import pRetry, {AbortError} from 'p-retry';


rxjs.map(() => [])
del('')

const run = async () => {
	if (true) {
		throw new AbortError('abc');
	}
};


console.log(await pRetry(run, {retries: 5}));