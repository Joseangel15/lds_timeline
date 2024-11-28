INSERT INTO events_history (
    event_title, 
    event_description, 
    event_city, 
    event_state, 
    event_country, 
    event_date
) 
VALUES ($1, $2, $3, $4, $5, $6);
