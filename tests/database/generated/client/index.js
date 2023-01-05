
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal
} = require('./runtime/index')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.14.0
 * Query Engine version: 2b0c12756921c891fec4f68d9444e18c7d5d4a6a
 */
Prisma.prismaVersion = {
  client: "3.14.0",
  engine: "2b0c12756921c891fec4f68d9444e18c7d5d4a6a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'


const path = require('path')

const { findSync } = require('./runtime')
const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "generated/client",
    "client",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname
/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AddressScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  createdBy: 'createdBy',
  updatedAt: 'updatedAt',
  updatedBy: 'updatedBy',
  isDeleted: 'isDeleted',
  deletedBy: 'deletedBy',
  isVerified: 'isVerified',
  full: 'full',
  line1: 'line1',
  line2: 'line2',
  line3: 'line3',
  city: 'city',
  state: 'state',
  zip: 'zip',
  countryCode: 'countryCode',
  latitude: 'latitude',
  longitude: 'longitude'
});

exports.Prisma.BusinessScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  createdBy: 'createdBy',
  updatedAt: 'updatedAt',
  updatedBy: 'updatedBy',
  isDeleted: 'isDeleted',
  deletedBy: 'deletedBy',
  name: 'name',
  isVerified: 'isVerified'
});

exports.Prisma.LandlordScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  createdBy: 'createdBy',
  updatedAt: 'updatedAt',
  updatedBy: 'updatedBy',
  isDeleted: 'isDeleted',
  deletedBy: 'deletedBy',
  name: 'name',
  isVerified: 'isVerified'
});

exports.Prisma.PropertyManagementCompanyScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  createdBy: 'createdBy',
  updatedAt: 'updatedAt',
  updatedBy: 'updatedBy',
  isDeleted: 'isDeleted',
  deletedBy: 'deletedBy',
  name: 'name',
  isVerified: 'isVerified'
});

exports.Prisma.RatingScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  createdBy: 'createdBy',
  updatedAt: 'updatedAt',
  updatedBy: 'updatedBy',
  isDeleted: 'isDeleted',
  deletedBy: 'deletedBy',
  address: 'address',
  landlordAtDateOfRating: 'landlordAtDateOfRating',
  doingBusinessAsAtDateOfRating: 'doingBusinessAsAtDateOfRating',
  propertyManagementCompanyAtDateOfRating: 'propertyManagementCompanyAtDateOfRating',
  sentiment: 'sentiment',
  rentPrice: 'rentPrice',
  body: 'body',
  tenancyEndDate: 'tenancyEndDate',
  tenancyStartDate: 'tenancyStartDate'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  username: 'username',
  email: 'email',
  banned: 'banned',
  password: 'password',
  role: 'role',
  createdAt: 'createdAt',
  isEnrolledInAddressModeration: 'isEnrolledInAddressModeration'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.NullableJsonNullValueInput = makeEnum({
  DbNull: 'DbNull',
  JsonNull: 'JsonNull'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.JsonNullValueFilter = makeEnum({
  DbNull: 'DbNull',
  JsonNull: 'JsonNull',
  AnyNull: 'AnyNull'
});
exports.UserRoleType = makeEnum({
  ADMIN: 'ADMIN',
  MODERATOR: 'MODERATOR',
  TENANT: 'TENANT',
  LANDLORD: 'LANDLORD',
  PROPERTY_MANAGEMENT_COMPANY: 'PROPERTY_MANAGEMENT_COMPANY'
});

exports.Prisma.ModelName = makeEnum({
  Address: 'Address',
  Business: 'Business',
  Landlord: 'Landlord',
  PropertyManagementCompany: 'PropertyManagementCompany',
  Rating: 'Rating',
  User: 'User'
});

const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/jefferyreynolds/Dev/bedbug/tests/database/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [
      "interactiveTransactions"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "3.14.0",
  "engineVersion": "2b0c12756921c891fec4f68d9444e18c7d5d4a6a",
  "datasourceNames": [
    "postgresql"
  ],
  "activeProvider": "postgresql"
}
config.document = dmmf
config.dirname = dirname




const { warnEnvConflicts } = require('./runtime/index')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})
const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
path.join(process.cwd(), "generated/client/libquery_engine-darwin-arm64.dylib.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "generated/client/schema.prisma")