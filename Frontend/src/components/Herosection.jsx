import { useState } from 'react';
import { TextInput, Button, Group, Paper, Container, Title, Stack } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker, TimePicker } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';
import MapContainer from './Map';

export default function HeroSection() {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');
  const [date, setDate] = useState(dayjs());
  const [time, setTime] = useState(dayjs());
  const [distance, setDistance] = useState('');

  // Dummy coordinates for testing
  const dummyPickupLocation = { lat: 23.0225, lng: 72.5714 };
  const dummyDropLocation = { lat: 23.0330, lng: 72.5800 };

  return (
    <Container fluid className="p-0 min-h-[200px] mt-[90px] max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/2 px-6 py-12 md:px-12 flex flex-col justify-center">
          <Title order={1} className="text-5xl md:text-6xl font-bold mb-16">
            Go anywhere with Rebu
          </Title>
          
          <Paper p="md" radius="md" className="bg-gray-100">
            <Stack spacing="md">
              <div className="flex items-start">
                <div className="flex flex-col items-center mr-4 pt-[8px]">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <div className="w-0.5 h-12 bg-black my-1"></div>
                  <div className="w-3 h-3 bg-black rounded-sm pb-[8px]"></div>
                </div>
                <Stack spacing="xs" className="w-full">
                  <TextInput
                    id="pickup-location"
                    placeholder="Pickup location"
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    rightSection={<IconArrowRight size={18} />}
                    radius="md"
                    styles={{ input: { padding: '12px' } }}
                  />
                  <TextInput
                    id="drop-location"
                    placeholder="Dropoff location"
                    value={dropLocation}
                    onChange={(e) => setDropLocation(e.target.value)}
                    radius="md"
                    styles={{ input: { padding: '12px' } }}
                  />
                </Stack>
              </div>
              
              <Group grow>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Pick a date"
                    value={date}
                    onChange={setDate}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                  <TimePicker
                    label="Pick a time"
                    value={time}
                    onChange={setTime}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
              </Group>
              
              <Group position="apart" mt="md">
                <Button 
                  radius="md" 
                  className="bg-black hover:bg-gray-800 text-white px-6"
                  onClick={() => console.log('see prices clicked')}
                >
                  See prices
                </Button>
                <Button variant="subtle" className="text-black hover:bg-transparent">
                  Log in to see your recent activity
                </Button>
              </Group>

              {distance && (
                <div className="mt-4 text-lg font-semibold">
                  Distance: {distance}
                </div>
              )}
            </Stack>
          </Paper>
        </div>
        <div className="w-full md:w-1/2">
          <MapContainer pickupLocation={dummyPickupLocation} dropLocation={dummyDropLocation} />
        </div>
      </div>
    </Container>
  );
}