 
export const formData = {
  "title": "CREATE USER",
  "subtitle": "Create a new user profile",
  "fields": [
    {
      "name": "firstName",
      "label": "First Name",
      "type": "text",
      "placeholder": "Your First Name",
      "validation": {
        "required": true
      },
      "columnSpan": 2 // This field spans 2 columns
    },
    {
      "name": "lastName",
      "label": "Last Name",
      "type": "text",
      "placeholder": "Your Last Name",
      "validation": {
        "required": true
      },
      "columnSpan": 2 // This field spans 2 columns
    },
    {
      "name": "email",
      "label": "Email",
      "type": "email",
      "placeholder": "Your Email",
      "validation": {
        "required": true,
        "email": true
      },
      "columnSpan": 4 // This field spans 4 columns
    },
    {
      "name": "contact",
      "label": "Contact Number",
      "type": "text",
      "placeholder": "Your Contact Number",
      "validation": {
        "required": true,
        "regex": "^((\\+[1-9]{1,4}[ -]?)|(\\([0-9]{2,3}\\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$"
      },
      "columnSpan": 4 // This field spans 4 columns
    },
    {
      "name": "address1",
      "label": "Address 1",
      "type": "text",
      "placeholder": "Your Address 1",
      "validation": {
        "required": true
      },
      "columnSpan": 4 // This field spans 4 columns
    },
    {
      "name": "address2",
      "label": "Address 2",
      "type": "text",
      "placeholder": "Your Address 2",
      "validation": {
        "required": true
      },
      "columnSpan": 4 // This field spans 4 columns
    },
    {
      "name": "country",
      "label": "Country",
      "type": "select",
      "placeholder": "Select Country",
      "validation": {
        "required": true
      },
      "columnSpan": 2,
      "options": [
        {
          "value": "India",
          "label": "India"
        },
        {
          "value": "USA",
          "label": "USA"
        },
        {
          "value": "UK",
          "label": "UK"
        }
      ]
    }
  ],

  "buttonText": "Create New User"
};