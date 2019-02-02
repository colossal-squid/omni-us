# Running it
Run `ng serve` for a dev server. 

Navigate to [http://localhost:4200/](http://localhost:4200/). The app will automatically reload if you change any of the source files.

# Frontend challenge
Use the latest version of Angular (no additional frameworks/libraries) and TypeScript to render an arbitrary deeply nested object, for example:
```
{
	a: true,
	b: 1,
	c: 'Hello, World!',
	d: {
		e: 'I am a nested string!',
		f: {
			g: {
				h: {
					i: 'So am I!',
					j: false,
					k: 123,
					l: 'And I am last!'
				}
			}
		}
	}
}
```
Use three types of inputs to display the values: check boxes for booleans, input type numbers for numbers and text boxes for strings.
Additional: try to style the UI as best as you can (again, no additional frameworks/libraries, however you can use a preprocessor, like for example
SCSS). *ok, i've clearly failed here, didn't even config a pre-processor*