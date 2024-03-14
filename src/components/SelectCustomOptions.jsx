'use client'
import { Link, usePathname } from "@/navigation";
import Avatar from '@mui/joy/Avatar';
import ListDivider from '@mui/joy/ListDivider';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Option from '@mui/joy/Option';
import Select from '@mui/joy/Select';
import * as React from 'react';

export default function SelectCustomOption({ options, locale }) {
  const pathname = usePathname(locale);
  
  
  return (
    <Select
      defaultValue={locale}
      slotProps={{
        listbox: {
          sx: {
            '--ListItemDecorator-size': '44px',
          },
        },
      }}
      sx={{
        '--ListItemDecorator-size': '44px',
        minWidth: 100,
      }}

      >

      {options.map((option, index) => (
        <React.Fragment key={option.value}>
          {index !== 0 ? <ListDivider role="none" inset="startContent" /> : null}
          <Link href={pathname} locale={option.value}>
          <Option value={option.value} label={option.label}>
            <ListItemDecorator>
              <Avatar size="sm" src={option.src} />
            </ListItemDecorator>
            {option.label}
          </Option>
          </Link>
        </React.Fragment>
      ))}
    </Select>

  );
}
