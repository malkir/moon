import fs from 'fs/promises';
import { BINARY, exec, getPackageFromTarget, getPath, TARGET } from '../helpers.mjs';

async function buildBinary() {
	// Allow arbitrary args to be passed through
	const args = process.argv.slice(2);

	// Build the binary with the provided target
	await exec('cargo', ['build', '--release', '--target', TARGET, ...args]);

	// Copy the binary to the package
	const targetPath = getPath('target', TARGET, 'release', BINARY);
	const binaryPath = getPath('packages', getPackageFromTarget(), BINARY);
	const artifactPath = getPath(BINARY);

	// Copy into target core package
	await fs.copyFile(targetPath, binaryPath);
	await fs.chmod(binaryPath, 0o755);

	// Copy into root so that it can be uploaded as an artifact
	await fs.copyFile(targetPath, artifactPath);
	await fs.chmod(artifactPath, 0o755);
}

buildBinary().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
