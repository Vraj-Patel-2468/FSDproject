import { useRef, useEffect, useState } from 'react';
import { TextInput, Button, Group, Paper, Container, Title, Stack, Select } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker, TimePicker } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';

export default function HeroSection() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const pickupMarker = useRef(null);
    const dropMarker = useRef(null);
    const directionsService = useRef(null);
    const directionsRenderer = useRef(null);
    const pickupAutocomplete = useRef(null);
    const dropAutocomplete = useRef(null);

    const [lng, setLng] = useState(72.5714);
    const [lat, setLat] = useState(23.0225);
    const [zoom, setZoom] = useState(12);
    const [mapLoaded, setMapLoaded] = useState(false);
    const [pickupLocation, setPickupLocation] = useState('');
    const [dropLocation, setDropLocation] = useState('');
    const [pickupSuggestions, setPickupSuggestions] = useState([]);
    const [dropSuggestions, setDropSuggestions] = useState([]);
    const [date, setDate] = useState(dayjs());
    const [time, setTime] = useState(dayjs());
    const [distance, setDistance] = useState('');

    useEffect(() => {
        const initializeMap = async () => {
            if (map.current) return;
            if (!window.google) {
                const googleMapScript = document.createElement('script');
                const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
                googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places,geocoding,directions`;
                googleMapScript.async = true;
                googleMapScript.defer = true;
                googleMapScript.onload = () => {
                    createMap();
                };
                document.body.appendChild(googleMapScript);
            } else {
                createMap();
            }
        };

        const createMap = () => {
            const mapOptions = {
                center: { lat: lat, lng: lng },
                zoom: zoom,
                mapTypeControl: false,
                fullscreenControl: false,
                streetViewControl: false,
                zoomControl: true,
                zoomControlOptions: {
                    position: window.google.maps.ControlPosition.RIGHT_BOTTOM
                }
            };

            map.current = new window.google.maps.Map(mapContainer.current, mapOptions);
            directionsService.current = new window.google.maps.DirectionsService();
            directionsRenderer.current = new window.google.maps.DirectionsRenderer();
            directionsRenderer.current.setMap(map.current);

            // Initialize autocomplete for pickup and drop locations
            pickupAutocomplete.current = new window.google.maps.places.Autocomplete(
                document.getElementById('pickup-location'),
                { types: ['geocode'] }
            );
            dropAutocomplete.current = new window.google.maps.places.Autocomplete(
                document.getElementById('drop-location'),
                { types: ['geocode'] }
            );

            setMapLoaded(true);
        };

        initializeMap().catch(err => console.error("Error initializing map:", err));

        return () => {
        };
    }, []);

    const handlePickupLocationChange = (event) => {
        setPickupLocation(event.target.value);
    };

    const handleDropLocationChange = (event) => {
        setDropLocation(event.target.value);
    };

    const handleDateChange = (newDate) => {
        setDate(newDate);
    };

    const handleTimeChange = (newTime) => {
        setTime(newTime);
    };

    const calculateRoute = () => {
        if (pickupLocation && dropLocation) {
            const geocoder = new window.google.maps.Geocoder();

            // Geocode pickup location
            geocoder.geocode({ address: pickupLocation }, (pickupResults, pickupStatus) => {
                if (pickupStatus === 'OK') {
                    const pickupLatLng = pickupResults[0].geometry.location;

                    // Add pickup marker
                    if (pickupMarker.current) {
                        pickupMarker.current.setMap(null);
                    }
                    pickupMarker.current = new window.google.maps.Marker({
                        position: pickupLatLng,
                        map: map.current,
                        title: 'Pickup Location'
                    });

                    // Geocode drop location
                    geocoder.geocode({ address: dropLocation }, (dropResults, dropStatus) => {
                        if (dropStatus === 'OK') {
                            const dropLatLng = dropResults[0].geometry.location;

                            // Add drop marker
                            if (dropMarker.current) {
                                dropMarker.current.setMap(null);
                            }
                            dropMarker.current = new window.google.maps.Marker({
                                position: dropLatLng,
                                map: map.current,
                                title: 'Drop Location'
                            });

                            // Calculate route
                            const request = {
                                origin: pickupLatLng,
                                destination: dropLatLng,
                                travelMode: 'DRIVING'
                            };

                            directionsService.current.route(request, (result, status) => {
                                if (status === 'OK') {
                                    directionsRenderer.current.setDirections(result);
                                    setDistance(result.routes[0].legs[0].distance.text);
                                } else {
                                    console.error(`Directions request failed due to ${status}`);
                                }
                            });
                        } else {
                            console.error(`Geocode for drop location failed: ${dropStatus}`);
                        }
                    });
                } else {
                    console.error(`Geocode for pickup location failed: ${pickupStatus}`);
                }
            });
        }
    };
    return (
        <Container fluid className="p-0 min-h-screen">
          <div className="flex flex-col md:flex-row w-full h-screen">
            <div className="w-full md:w-1/4 px-6 py-8 md:px-10 flex flex-col justify-start">
              
              <Paper p="md" radius="md" className="bg-gray-100">
                <Stack spacing="md">
                  <div className="flex items-start">
                    <div className="flex flex-col items-center mr-4 pt-3">
                      <div className="w-3 h-3 bg-black rounded-full"></div>
                      <div className="w-0.5 h-12 bg-black my-1"></div>
                      <div className="w-3 h-3 bg-black rounded-sm"></div>
                    </div>
                    <Stack spacing="xs" className="w-full">
                      <TextInput
                        id="pickup-location"
                        placeholder="Pickup location"
                        value={pickupLocation}
                        onChange={handlePickupLocationChange}
                        rightSection={<IconArrowRight size={18} />}
                        radius="md"
                        styles={{ input: { padding: '12px' } }}
                      />
                      <TextInput
                        id="drop-location"
                        placeholder="Dropoff location"
                        value={dropLocation}
                        onChange={handleDropLocationChange}
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
                        onChange={handleDateChange}
                        renderInput={(params) => <TextField {...params} fullWidth />}
                      />
                      <TimePicker
                        label="Pick a time"
                        value={time}
                        onChange={handleTimeChange}
                        renderInput={(params) => <TextField {...params} fullWidth />}
                      />
                    </LocalizationProvider>
                  </Group>
                  <div className="text-lg font-semibold mb-4">Total Distance: {distance} km</div>
                  <div className="text-lg font-semibold mb-4">Price: ₹{distance * 10}</div>

                  <Group position="apart" mt="md">
                    <Button 
                      radius="md" 
                      className="bg-black hover:bg-gray-800 text-white px-6"
                      onClick={calculateRoute}
                    >
                      See prices
                    </Button>
                  </Group>
                </Stack>
              </Paper>
            </div>
            
            <div className="w-full md:w-3/4 h-full min-h-screen relative">
              <div 
                ref={mapContainer} 
                className="w-full h-full absolute inset-0" 
                style={{ minHeight: '100vh' }}
              />
              {!mapLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                  <p>Loading Map...</p>
                </div>
              )}
            </div>
          </div>
        </Container>
      );
}