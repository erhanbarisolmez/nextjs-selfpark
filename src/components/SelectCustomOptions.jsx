
import Avatar from '@mui/joy/Avatar';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Select from '@mui/joy/Select';
import * as React from 'react';


function renderValue(option) {
  if (!option) {
    return null;
  }

  return (
    <React.Fragment>
      <ListItemDecorator>
        <Avatar size="sm" src={options.find((o) => o.value === option.value)?.src} />
      </ListItemDecorator>
      {option.label}
    </React.Fragment>
  );
}

export default function SelectCustomOption({options}) {


  return (
    <Select
      defaultValue="1"
      slotProps={{
        listbox: {
          sx: {
            '--ListItemDecorator-size': '44px',
          },
        },
      }}
      sx={{
        '--ListItemDecorator-size': '44px',
        minWidth: 240,
      }}
      renderValue={renderValue}
    >
      {options.map((item, index) => (
        <React.Fragment key={option.value}>
          {index !== 0 ? <ListDivider role="none" inset="startContent" /> : null}
          <Option value={item.value} label={item.label}>
            <ListItemDecorator>
              <Avatar size="sm" src={item.src} />
            </ListItemDecorator>
            {option.label}
          </Option>
        </React.Fragment>
      ))}
    </Select>
  );
}
