# s-postgres

This NPM package provides a pre-configured Postgres setup for Docker. It allows customization through environment variables. Follow the instructions below to integrate this package into your project.

## Installation

To install the package, run the following command:

```bash
yarn add s-postgres
```

## Configuration

Create a `.env` file in your project with the following example configuration:

```env
DATABASE_URL="postgresql://username:password@localhost:5010/mydb?schema=public"
CONTAINER_NAME="s-postgres"
```

Adjust the values accordingly based on your requirements. If you do not add your file here, the values presented will be added automatically.

## Usage

After installing the package, add the following script to your `package.json` file:

```json
"scripts": {
  "start": "s-postgres"
}
```

Now, you can run the package by executing:

```bash
yarn start
```

This will initialize the Postgres container with the specified configuration.

Make sure to customize the `DATABASE_URL` and `CONTAINER_NAME` variables in your `.env` file to match your project's needs.

## Important Note

Ensure that Docker is installed and running on your machine before using this package.

Feel free to reach out if you encounter any issues or have further questions.
