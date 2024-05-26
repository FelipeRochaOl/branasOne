import { JestConfigWithTsJest, pathsToModuleNameMapper } from 'ts-jest'
import { compilerOptions } from './tsconfig.json'

const jestConfig: JestConfigWithTsJest = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>'],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/'
  })
}

export default jestConfig
