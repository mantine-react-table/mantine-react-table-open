import { type MRT_ColumnDef, MantineReactTable } from '../../src';
import { faker } from '@faker-js/faker';
import { type Meta } from '@storybook/react';

const meta: Meta = {
    title: 'Features/Cell Hover Reveal Examples',
};

export default meta;

const columns: MRT_ColumnDef<(typeof data)[0]>[] = [
    {
        accessorKey: 'firstName',
        header: 'First Name',
    },
    {
        accessorKey: 'lastName',
        header: 'Last Name',
    },
    {
        accessorKey: 'address',
        header: 'Address',
    },
    {
        accessorKey: 'state',
        header: 'State',
    },
    {
        accessorKey: 'phoneNumber',
        header: 'Phone Number',
    },
    {
        accessorKey: 'job',
        header: 'Job',
        enableCellHoverReveal: true,
        size: 75
    },
    {
        accessorKey: 'jobDescriptor',
        header: 'Job Descriptor',
    },
    {
        accessorKey: 'company',
        header: 'Company',
    }
];

const data = [...Array(100)].map(() => ({
    address: faker.location.streetAddress(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    phoneNumber: faker.phone.number(),
    state: faker.location.state(),
    job: faker.person.jobTitle(),
    jobDescriptor: faker.person.jobDescriptor(),
    company: faker.company.name(),
}));

export const CellHoverReveal = () => (
    <MantineReactTable columns={columns} data={data} layoutMode="grid" />
);


