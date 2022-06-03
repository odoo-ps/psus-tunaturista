# -*- coding: utf-8 -*-
{
    'name': 'POS client screen required fields.',
    'summary': """Make the serial numbers/lots on a work order only selectable if they are available.""",
    'description': """
        - Tu Naturista tracks their client's purchases by associating them to the contact from POS, when a client is not registered as a contact the employee first looks for it to check if they are already in the database. They use the barcode reference field and the email field but sometimes employees forget to register those fields so they create a generic one losing the sales tracking.
        - Gram: emab
        - Task ID: 2835331 
        """,
    'author': 'Odoo, Inc.',
    'website': 'https://www.odoo.com',
    'category': 'Custom Development',
    'version': '15.0.1.0.0',
    'depends': ['point_of_sale'],
    'assets': {
        'point_of_sale.assets': [
            'tunaturista_pos_required_fields/static/src/js/**/*'
        ]
    },

    'license': 'OPL-1'
}
